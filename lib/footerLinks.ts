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
        // { href: '/about', title: 'About' },
      ],
    },
    { columnName: 'Product', links: [] },
    {
      columnName: 'Docs',
      links: [{ href: 'https://docs.thetilescompany.io', title: 'White paper' }],
    },
    {
      columnName: 'Support',
      links: [{ href: '#support', title: 'Support' }],
    },
  ];
