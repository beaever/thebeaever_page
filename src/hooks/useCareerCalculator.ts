import { useMemo } from 'react';

interface ExperiencePeriod {
  years: number;
  months: number;
  totalMonths: number;
  formattedText: string;
}

interface Experience {
  from: string;
  to?: string;
}

const parseDateString = (dateStr: string): Date => {
  return new Date(dateStr.replace(/\./g, '-'));
};

export const useExperienceCalculator = (
  from: string,
  to?: string,
): ExperiencePeriod => {
  return useMemo(() => {
    const startDate = parseDateString(from);
    const endDate =
      !to || to.toLowerCase() === 'present' ? new Date() : parseDateString(to);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months;

    let formattedText = '';
    if (years > 0) {
      formattedText = `${years}년 ${months > 0 ? `${months}개월` : ''}`;
    } else {
      formattedText = `${months}개월`;
    }

    return {
      years,
      months,
      totalMonths,
      formattedText: formattedText.trim(),
    };
  }, [from, to]);
};

export const useTotalExperience = (experiences: Experience[]): string => {
  return useMemo(() => {
    let totalMonths = 0;

    experiences.forEach((exp) => {
      const startDate = parseDateString(exp.from);
      const endDate =
        !exp.to || exp.to.toLowerCase() === 'present'
          ? new Date()
          : parseDateString(exp.to);

      const diff =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());
      totalMonths += diff;
    });

    const y = Math.floor(totalMonths / 12);
    const m = totalMonths % 12;

    return m > 0 ? `${y}.${Math.round((m / 12) * 10)}y` : `${y}y`;
  }, [experiences]);
};
