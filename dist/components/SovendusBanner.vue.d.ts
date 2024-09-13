export interface Props {
    trafficSourceNumber: number;
    trafficMediumNumber: number;
    sessionId?: string;
    timestamp?: number;
    orderId?: string;
    orderValue?: number;
    orderCurrency?: string;
    usedCouponCode?: string;
    consumerSalutation?: string;
    consumerFirstName?: string;
    consumerLastName?: string;
    consumerEmail?: string;
    consumerPhone?: string;
    consumerStreet?: string;
    consumerStreetNumber?: string;
    consumerCity?: string;
    consumerCountry?: string;
    consumerZipcode?: string;
    consumerYearOfBirth?: number;
    consumerDateOfBirth?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>>, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
