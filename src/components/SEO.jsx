import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, name, type }) => {
  const defaultTitle = "WebTechAI | Modern IT Solutions";
  const defaultDescription = "Leading provider of innovative AI and IT solutions. Discover our software products, consulting services, and expertise.";
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | WebTechAI` : defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      
      {/* Open Graph tags for social sharing */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || "WebTechAI"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
