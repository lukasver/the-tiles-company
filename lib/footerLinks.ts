export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
    {
      columnName: 'Company',
      links: [
        { href: '/', title: 'Home' },
        { href: '/ico', title: 'ICO' },
      ],
    },
    { columnName: 'Product', links: [] },
    {
      columnName: 'Docs',
      links: [{ href: '/docs', title: 'White paper' }],
    },
    {
      columnName: 'Support',
      links: [{ href: '#support', title: 'Support' }],
    },
  ];
