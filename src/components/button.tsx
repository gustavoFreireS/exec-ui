import * as React from 'react';
import styled from 'styled-components';
import '../assets/tailwind.css';

interface IButtonProps {
  children: React.ReactNode;
  variation?: Variations;
}

type Variations = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

const setVariation = (variation?: Variations) => {
  if (!variation) return 'bg-black';
  const variations = {
    primary: '-black',
    secondary: '-gray-700',
    danger: '-red-700',
    success: '-green-700',
    warning: '-yellow-700',
  };
  return variations[variation] as string;
};

const StyledButton = styled.button.attrs((props: IButtonProps) => ({
  className: `transition duration-500 ease-in-out
              bg-transparent 
              hover:bg${setVariation(props.variation)}
              text${setVariation(props.variation)}
              font-semibold 
              hover:text-white 
              py-2 px-4 
              border 
              border${setVariation(props.variation)} 
              hover:border-transparent 
              rounded`,
}))``;

const Button: React.FC<IButtonProps> & React.HTMLProps<HTMLButtonElement> = ({
  children,
  ...props
}: IButtonProps) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
);

export default Button;

Button.defaultProps = {
  variation: 'secondary',
};
