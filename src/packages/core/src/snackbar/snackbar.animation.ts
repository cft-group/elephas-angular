import {AnimationTriggerMetadata, trigger, state, transition, style, animate} from '@angular/animations';

const animationTiming: number = 100;

export const SnackbarAnimation: {
    readonly fadeSnackbar: AnimationTriggerMetadata;
} = {
    fadeSnackbar: trigger('fade', [
            state('fadeOut', style({ opacity: 0 })),
            state('fadeIn', style({ opacity: 1 })),
            transition('* => fadeIn', [
                style({ transform: 'scale3d(.3, .3, .3)', opacity: 1 }),
                animate(animationTiming)
            ]),
            transition('fadeIn => fadeOut', [
                animate(animationTiming, style({ transform: 'scale3d(.3, .3, .3)', opacity: 0 }))
            ])
        ])
};
