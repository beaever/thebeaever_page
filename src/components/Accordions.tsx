import { Colors, Fonts } from '@/styles/themes';
import { css } from '@emotion/react';
import { useState } from 'react';
import ArrowBottom from '../../public/svg/icArrowBottom.svg';
import {
  boxshadowStyle,
  contentsFontStyle,
  titleFontStyle,
} from '@/styles/common.style';

const containerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  background-color: ${Colors.element.grayScale100};
  border: 1px solid ${Colors.element.grayScale300};
  border-radius: 5px;
`;

const titleStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div css={[containerStyle, boxshadowStyle]}>
      <div css={titleStyle}>
        <span css={titleFontStyle}>{title}</span>
        <div onClick={onClickToggle}>
          <ArrowBottom css={iconStyle} />
        </div>
      </div>
      <div>{isOpen && <p css={contentsFontStyle}>{content}</p>}</div>
    </div>
  );
};

export default Accordion;
