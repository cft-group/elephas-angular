export interface SnackbarConfig {
    text: string;
    buttonText: string;
    className?: string;
    /** The length of time in seconds to wait before automatically dismissing the snack bar. */
    duration?: number;
}
