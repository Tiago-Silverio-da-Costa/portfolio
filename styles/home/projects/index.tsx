"use client";
import styled from "styled-components"

export const Spin = styled.div`
  width: fit-content;
	animation-name: spin;
	animation-duration: 2500ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const FormBtn = styled.button<{
  $isSubmitting?: boolean;
}>`
  border-radius: 0.375rem;
	background-color: var(--btn-bg-color);
  color: var(--default-text-color);
	padding: 0.41rem 1.5rem;
	cursor: pointer;
	width: 100%;

	@media (min-width: 768px) {
		width: fit-content;
	}

	& span {
	  color: var(--default-text-color);
	  font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
	}

	${({ $isSubmitting }) =>
    $isSubmitting
    && `
    cursor: default;
    & span {
      display: none;
    }
   `}

`;

export const FormBtnLead = styled.button<{
  $isSubmitting?: boolean;
}>`
  border-radius: 0.375rem;
	background-color: var(--btn-bg-color);
  color: var(--default-text-color);
	padding: 0.41rem 1.5rem;
	cursor: pointer;
	width: 100%;
  text-transform: uppercase;
  
	& span {
	  color: var(--default-text-color);
	  font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
	}

	${({ $isSubmitting }) =>
    $isSubmitting
    && `
    cursor: default;
    & span {
      display: none;
    }
   `}

`;

export const FormFieldError = styled.div`
	color: var(--err);
	font-size: 0.75rem;
	margin-top: 0.3125rem;
	width: 100%;
`;

export const FormFieldGrp = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  transition: all 0.2s;
`;

export const FormFieldWrapper = styled.div<{
  $error?: boolean
}>`
  width: 100%;

  &:first-child {
    margin-top: 0;
  }

 option {
  color: var(--default-text-color);
 }

  & input,
  & input:focus,
  & input:focus-visible,
  & textarea,
  & textarea:focus,
  & textarea:focus-visible,
  & select,
  & select:focus,
  & select:focus-visible {
    border-radius: 0.375rem;
    appearance: none;
    background-color: transparent;
    border: 1px solid var(--border-color);
    font-size: 0.875rem;
    letter-spacing: -0.05em;
    line-height: 1.25rem;
    outline: none;
    padding: 0.75rem;
    resize: none;
    outline: none;
    width: 100%
  }

  ${({ $error }) =>
    $error &&
    `
    & input,
    & input:focus,
    & input:focus-visible,
    & textarea,
    & textarea:focus,
    & textarea:focus-visible,
    & select,
    & select:focus,
    & select:focus-visible,
    {
      border-color: var(--err);
      & ::placeholder {
        color: var(--err);
      }
    }
  `}
`;