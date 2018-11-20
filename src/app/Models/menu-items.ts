export const items: any[] = [{
    text: 'File',
    items: [{ text: 'New', show: true }, { text: 'Open' }, { text: 'Close' }]
}, {
    text: 'Help'
}];

export const treeviewdata: any[] = [
    {
        text: 'Policy Family', index: 0, items: [
            { text: 'Policy', index: 1 },
            { text: 'Policy Section', index: 1 },
            { text: 'Policy Activity', index: 1 }
        ]
    },
    {
        text: 'Contact Family', index: 0, items: [
            { text: 'Contact', index: 1 },
            { text: 'Contact ACR', index: 1 },
            { text: 'Contact Address', index: 1 }
        ]
    }
];

export const policyproperties: any[] = [
    { id:1, text: 'Policy Number', controltype: 'text' },
    { id:2, text: 'Status', controltype: 'text' },
    { id:3, text: 'Currency', controltype: 'text' },
    { id:4, text: 'Expiry Date', controltype: 'date' },
    { id:5, text: 'Active', controltype: 'checkbox' },
    { id:6, text: 'Type of Policy', controltype: 'text' },
    { id:7, text: 'Year', controltype: 'text' },
    { id:8, text: 'ROI', controltype: 'text' }
];

export class SelectedEntityView {
    EntityName: string;
    ViewType: string;
    Instances: string;
}