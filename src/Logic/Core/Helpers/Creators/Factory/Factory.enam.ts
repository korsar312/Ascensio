import StoreCreator from "./Variables/FactoryStore";
import ModulesCreator from "./Variables/FactoryModules";
import factory from "./Factory";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

enum EModule {
	Language = "Language",
	Style = "Style",
}

enum EType {
	Store = "Store",
	Module = "Module",
}

type TWrite<T extends EType> = `${EModule}${T}`;

type TStoreList = Record<TWrite<EType.Store>, unknown>;
type TModuleList = Record<TWrite<EType.Module>, unknown>;

export const StoreFactory = {
	LanguageStore: {} as StoreCreator<LanguageInterface.TStore>,
	StyleStore: {} as StoreCreator<StylesInterface.TStore>,
} satisfies TStoreList;

export const ModuleFactory = {
	LanguageModule: {} as LanguageInterface.IModules,
	StyleModule: {} as StylesInterface.IModules,
} satisfies TModuleList;

type TFactory<T> = {
	[key in keyof T]: T[key];
};

export type TStoreFactory = TFactory<typeof StoreFactory>;
export type TTypeModule = TFactory<typeof ModuleFactory>;

export type TModuleFactory = {
	[key in keyof TTypeModule]: ModulesCreator<TTypeModule[key]>;
};

export type TFactoryCreators = TStoreFactory & TModuleFactory;

export function register() {
	for (let val in StoreFactory) factory.register(val as any, new StoreCreator());
	for (let val in ModuleFactory) factory.register(val as any, new ModulesCreator());
}
