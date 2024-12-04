import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCatalog__staffSkeleton } from "./TypeCatalog__staff";

export interface TypeShopFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    staff?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCatalog__staffSkeleton>>;
}

export type TypeShopSkeleton = EntrySkeletonType<TypeShopFields, "shop">;
export type TypeShop<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeShopSkeleton, Modifiers, Locales>;
export type TypeShopWithoutLinkResolutionResponse = TypeShop<"WITHOUT_LINK_RESOLUTION">;
export type TypeShopWithoutUnresolvableLinksResponse = TypeShop<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeShopWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeShop<"WITH_ALL_LOCALES", Locales>;
export type TypeShopWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeShop<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeShopWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeShop<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
