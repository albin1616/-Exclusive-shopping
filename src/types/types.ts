import { EmblaOptionsType } from "embla-carousel";
export interface CustomButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface LoginCredentials {
  userEmail: string;
  userPassword: string;
}

export interface RegisterCredentials {
  userName: string;
  userEmail: string;
  userPassword: string;
}

export interface ValidationErrors {
  userName?: string;
  userEmail?: string;
  userPassword?: string;
}
export type Credentials = LoginCredentials | RegisterCredentials;

export type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  description?: string;
  reviewCount: number;
  rating: number;
  quantity?: number;
};
export type PropType = {
  slides: Product[];
  options?: EmblaOptionsType;
};

export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviewCount: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export type CartItems = {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  description?: string;
  reviewCount: number;
  rating: number;
  quantity: number;
};
export interface CartContextType {
  cartItems: CartItems[];
  addToCart: (item: CartItems) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface CustomInputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

export type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};
