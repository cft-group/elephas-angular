import {AnimationTriggerMetadata, trigger, state, transition, style, animate} from '@angular/animations';

const animationTiming: string = '200ms ease-out';

export const SnackbarAnimation: {
    readonly hideSnackbar: AnimationTriggerMetadata;
} = {
    hideSnackbar: trigger('fade', [
        state('hidden', style({ bottom: '-64px' })),
        state('visible', style({ bottom: '16px' })),
        transition('* => visible', [
            style({ bottom: '-64px' }),
            animate(animationTiming)
        ]),
        transition('visible => hidden', [
            animate(animationTiming, style({ bottom: '-64px' }))
        ])
    ])
};
