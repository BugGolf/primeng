import { Component, ViewEncapsulation } from '@angular/core';
import { BasicDoc } from '../../doc/scrollpanel/basicdoc';
import { ImportDoc } from '../../doc/scrollpanel/importdoc';
import { CusstomDoc } from '../../doc/scrollpanel/customdoc';
import { StyleDoc } from '../../doc/scrollpanel/styledoc';
import { PropsDoc } from '../../doc/scrollpanel/propsdoc';
import { MethodsDoc } from '../../doc/scrollpanel/methodsdoc';
import { TemplatesDoc } from '../../doc/scrollpanel/templatesdoc';

@Component({
    templateUrl: './scrollpaneldemo.html',
    styleUrls: ['./scrollpaneldemo.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrollPanelDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CusstomDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDoc
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDoc
        },
        {
            id: 'templates',
            label: 'Templates',
            component: TemplatesDoc
        }
    ];
}
