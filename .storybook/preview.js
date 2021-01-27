import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from './../documentation.json';
import '!style-loader!css-loader!@elephas/layout/styles.min.css';
import '!style-loader!css-loader!@elephas/core/styles.min.css';
import '!style-loader!css-loader!perfect-scrollbar/css/perfect-scrollbar.css';

setCompodocJson(docJson);
