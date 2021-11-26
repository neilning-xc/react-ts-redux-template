import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | React typescript redux project template` : undefined}
      defaultTitle="React typescript redux project template"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
