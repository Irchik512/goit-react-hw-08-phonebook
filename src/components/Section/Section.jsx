import PropTypes from 'prop-types';
import { Section, Title, Container } from 'components/Section/Section.styled';

export default function Sections({ title, children }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
}

Sections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
