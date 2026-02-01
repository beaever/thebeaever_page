'use client';

import { useState, useRef, useEffect, useMemo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
  defaultAnimateLayoutChanges,
  AnimateLayoutChanges,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PROFILE, SKILLS, PROJECTS, CAREERS } from '@/constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

interface BentoCardConfig {
  id: string;
  colSpan: string;
  rowSpan: string;
}

interface SortableCardProps {
  id: string;
  className: string;
  children: ReactNode;
}

interface SortableCardPropsExtended extends SortableCardProps {
  activeId: string | null;
}

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true });

function SortableCard({
  id,
  className,
  children,
  activeId,
}: SortableCardPropsExtended) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({
    id,
    animateLayoutChanges,
  });

  const isDropTarget = activeId !== null && activeId !== id && isOver;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'transform 300ms cubic-bezier(0.25, 1, 0.5, 1)',
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      variants={itemVariants}
      className={`${className} ${isDragging ? 'cursor-grabbing scale-105 shadow-2xl shadow-white/20 ring-2 ring-white/30' : 'cursor-grab'} ${isDropTarget ? 'ring-2 ring-white/50 bg-white/10' : ''} transition-all duration-200`}
      {...attributes}
      {...listeners}
    >
      {children}
      {isDropTarget && (
        <div className='absolute inset-0 bg-white/10 rounded-3xl pointer-events-none flex items-center justify-center'>
          <span className='text-white/60 text-sm font-medium'>Drop here</span>
        </div>
      )}
    </motion.div>
  );
}

const STORAGE_KEY = 'bento-card-order';

const DEFAULT_CARD_ORDER: BentoCardConfig[] = [
  {
    id: 'main-project',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-2',
  },
  { id: 'sub-project', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 'tech-stack', colSpan: 'col-span-1', rowSpan: '' },
  { id: 'github', colSpan: 'col-span-1', rowSpan: '' },
  {
    id: 'additional-project',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: '',
  },
  { id: 'about-me', colSpan: 'col-span-1 md:col-span-2', rowSpan: '' },
  {
    id: 'experience',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-2',
  },
  { id: 'stats', colSpan: 'col-span-1', rowSpan: '' },
  { id: 'contact', colSpan: 'col-span-1', rowSpan: '' },
];

export default function HomePage() {
  const [cardOrder, setCardOrder] = useState<BentoCardConfig[]>(() => {
    if (typeof window === 'undefined') return DEFAULT_CARD_ORDER;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_CARD_ORDER;
      }
    }
    return DEFAULT_CARD_ORDER;
  });
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const handleShowMore = () => {
    if (contentRef.current) {
      contentRef.current.style.overflow = 'auto';
      setIsScrollable(false);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      setCardOrder((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newOrder = arrayMove(items, oldIndex, newIndex);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newOrder));
        return newOrder;
      });
    }
  };

  const handleResetOrder = () => {
    setCardOrder(DEFAULT_CARD_ORDER);
    localStorage.removeItem(STORAGE_KEY);
  };

  const cardIds = useMemo(() => cardOrder.map((card) => card.id), [cardOrder]);

  const renderCard = (cardConfig: BentoCardConfig) => {
    const baseClass = `${cardConfig.colSpan} ${cardConfig.rowSpan} bg-[#1a1a1a] rounded-3xl p-6 border border-white/5`;

    switch (cardConfig.id) {
      case 'main-project':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} relative overflow-hidden flex flex-col justify-end hover:border-white/20 group`}
          >
            <a
              href={PROJECTS[0]?.liveUrl || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-0 z-20'
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className='absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-400 group-hover:opacity-70 group-hover:scale-105'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')",
              }}
            />
            <div className='relative z-10 pointer-events-none'>
              <h3 className='text-2xl font-bold mb-1'>{PROJECTS[0]?.title}</h3>
              <p className='text-[#888] text-sm'>
                {PROJECTS[0]?.tags.join(', ')}
              </p>
            </div>
          </SortableCard>
        );

      case 'sub-project':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} relative overflow-hidden flex flex-col justify-end hover:border-white/20 group`}
          >
            <a
              href={PROJECTS[1]?.liveUrl || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-0 z-20'
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className='absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-400 group-hover:opacity-70 group-hover:scale-105'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')",
              }}
            />
            <div className='relative z-10 pointer-events-none'>
              <h3 className='text-xl font-bold mb-1'>{PROJECTS[1]?.title}</h3>
              <p className='text-[#888] text-sm'>{PROJECTS[1]?.role}</p>
            </div>
          </SortableCard>
        );

      case 'tech-stack':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} flex flex-col`}
          >
            <h3 className='text-xl font-bold mb-4'>Tech Stack</h3>
            <div className='flex flex-wrap gap-2 mt-auto'>
              {SKILLS.slice(0, 6).map((skill) => (
                <span
                  key={skill.name}
                  className='bg-white/10 px-3 py-1.5 rounded-xl text-sm backdrop-blur-sm'
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </SortableCard>
        );

      case 'github':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${cardConfig.colSpan} ${cardConfig.rowSpan} bg-white text-black rounded-3xl p-6 border border-white/5 flex flex-col justify-between`}
          >
            <a
              href={PROFILE.github}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-0 z-20'
              onClick={(e) => e.stopPropagation()}
            />
            <div className='pointer-events-none'>
              <h3 className='text-xl font-bold mb-1'>Github</h3>
              <p className='text-[#555] text-sm'>소스코드 보러가기</p>
            </div>
            <div className='text-4xl self-end pointer-events-none'>↗</div>
          </SortableCard>
        );

      case 'additional-project':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} relative overflow-hidden flex flex-col justify-end hover:border-white/20 group`}
          >
            <a
              href={PROJECTS[2]?.liveUrl || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-0 z-20'
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className='absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-400 group-hover:opacity-70 group-hover:scale-105'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop')",
              }}
            />
            <div className='relative z-10 pointer-events-none'>
              <h3 className='text-xl font-bold mb-1'>{PROJECTS[2]?.title}</h3>
              <p className='text-[#888] text-sm'>{PROJECTS[2]?.role}</p>
            </div>
          </SortableCard>
        );

      case 'about-me':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} flex flex-col`}
          >
            <h3 className='text-xl font-bold mb-3'>About Me</h3>
            <p className='text-[#888] text-sm leading-relaxed'>
              {PROFILE.description}
            </p>
            <div className='mt-4 space-y-2'>
              {PROFILE.highlights?.map((highlight, index) => (
                <p
                  key={index}
                  className='text-[#888] text-sm flex items-start gap-2'
                >
                  <span className='text-white/40'>•</span>
                  {highlight}
                </p>
              ))}
            </div>
          </SortableCard>
        );

      case 'experience':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} flex flex-col overflow-hidden relative`}
          >
            <h3 className='text-xl font-bold mb-4'>Experience</h3>
            <div ref={contentRef} className='flex-1 space-y-4 overflow-hidden'>
              {CAREERS.map((career) => (
                <div
                  key={career.company}
                  className='border-l-2 border-white/20 pl-4'
                >
                  <div className='flex items-center justify-between mb-1'>
                    <h4 className='font-bold text-lg'>{career.company}</h4>
                    <span className='text-[#888] text-xs'>{career.period}</span>
                  </div>
                  <p className='text-[#888] text-sm mb-2'>{career.position}</p>
                  <div className='space-y-2'>
                    {career.projects.map((project) => {
                      const isExpanded = expandedProject === project.title;
                      const hasDetails =
                        project.details && project.details.length > 0;
                      return (
                        <div
                          key={project.title}
                          className={`bg-white/5 rounded-xl p-3 ${hasDetails ? 'cursor-pointer hover:bg-white/10 transition-colors' : ''}`}
                          onClick={(e) => {
                            if (hasDetails) {
                              e.stopPropagation();
                              setExpandedProject(
                                isExpanded ? null : project.title,
                              );
                            }
                          }}
                        >
                          <div className='flex items-start justify-between'>
                            <p className='text-sm font-medium mb-1'>
                              {project.title}
                            </p>
                            {hasDetails && (
                              <span
                                className={`text-[#888] text-xs transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                              >
                                ▼
                              </span>
                            )}
                          </div>
                          <p className='text-[#888] text-xs line-clamp-2'>
                            {project.description}
                          </p>
                          {isExpanded && hasDetails && (
                            <div className='mt-3 pt-3 border-t border-white/10 space-y-1.5'>
                              {project.details.map((detail, idx) => (
                                <p
                                  key={idx}
                                  className='text-[#888] text-xs flex items-start gap-2'
                                >
                                  <span className='text-white/40 mt-0.5'>
                                    •
                                  </span>
                                  <span>{detail}</span>
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {isScrollable && (
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent pt-12 pb-6 px-6'>
                <button
                  onClick={handleShowMore}
                  className='w-full text-center text-[#888] text-sm hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer'
                >
                  <span>↓</span>
                  Show more
                </button>
              </div>
            )}
          </SortableCard>
        );

      case 'stats':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} flex flex-col justify-between`}
          >
            <h3 className='text-xl font-bold'>Stats</h3>
            <div className='mt-auto space-y-3'>
              <div>
                <p className='text-3xl font-bold'>
                  {CAREERS.reduce((acc, c) => acc + c.projects.length, 0)}+
                </p>
                <p className='text-[#888] text-xs'>Projects</p>
              </div>
              <div>
                <p className='text-3xl font-bold'>{CAREERS.length}</p>
                <p className='text-[#888] text-xs'>Companies</p>
              </div>
            </div>
          </SortableCard>
        );

      case 'contact':
        return (
          <SortableCard
            key={cardConfig.id}
            id={cardConfig.id}
            activeId={activeId}
            className={`${baseClass} flex flex-col justify-between hover:border-white/20`}
          >
            <a
              href={`mailto:${PROFILE.email}`}
              className='absolute inset-0 z-20'
              onClick={(e) => e.stopPropagation()}
            />
            <h3 className='text-xl font-bold pointer-events-none'>Contact</h3>
            <div className='mt-auto pointer-events-none'>
              <p className='text-[#888] text-sm mb-2'>{PROFILE.location}</p>
              <div className='flex items-center justify-between'>
                <p className='text-sm truncate pr-2'>{PROFILE.email}</p>
                <span className='text-2xl'>↗</span>
              </div>
            </div>
          </SortableCard>
        );

      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='max-w-[1000px] mx-auto px-5 py-10'>
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex justify-between items-center mb-20'
        >
          <div className='font-bold text-xl'>{PROFILE.logo}</div>
          <div className='flex items-center gap-4'>
            <button
              onClick={handleResetOrder}
              className='text-[#888] text-xs hover:text-white transition-colors'
            >
              Reset Layout
            </button>
            <Link
              href={`mailto:${PROFILE.email}`}
              className='border border-[#333] px-5 py-2 rounded-full text-sm transition-all hover:bg-white hover:text-black'
            >
              Get in Touch
            </Link>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-16'
        >
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white to-[#888] bg-clip-text text-transparent'>
            Building Digital
            <br />
            Experience.
          </h1>
          <p className='text-[#888] mt-4 text-lg'>{PROFILE.description}</p>
        </motion.section>

        {/* Bento Grid with Drag and Drop */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={cardIds} strategy={rectSortingStrategy}>
            <motion.section
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='grid grid-cols-1 md:grid-cols-4 gap-5'
              style={{ gridAutoRows: '280px' }}
            >
              {cardOrder.map((card) => renderCard(card))}
            </motion.section>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
