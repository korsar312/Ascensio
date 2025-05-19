import { CSSObject } from "@emotion/react";
import { typesUtils } from "Logic/Libs/Util/TypesUtils";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export type TDeepCSSObject = typesUtils.TDeepTypeObject<CSSObject>;
export type TTagPartialBtn<T extends HTMLElement, K extends keyof ButtonHTMLAttributes<T>> = Partial<Pick<ButtonHTMLAttributes<T>, K>>;
export type TTagPartialInput<T extends HTMLElement, K extends keyof InputHTMLAttributes<T>> = Partial<Pick<InputHTMLAttributes<T>, K>>;
