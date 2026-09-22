import React from 'react';
import { Button, Hero, ThemeProvider } from '@primer/react-brand';

export default function PrimerHero() {
  return (
    <ThemeProvider colorMode="light">
      <Hero align="start" className="portfolio-primer-hero">
        <Hero.Eyebrow>Business Strategy &amp; Analytics · Milan</Hero.Eyebrow>
        <Hero.Heading>
          Turning business questions into structured decisions, insights and execution.
        </Hero.Heading>
        <Hero.Description>
          Business consultant working across commercial strategy, analytics, transformation and applied AI.
        </Hero.Description>
        <Hero.ButtonGroup>
          <Button as="a" href="#work">Selected work</Button>
          <Button as="a" href="#experience" variant="subtle">Experience</Button>
        </Hero.ButtonGroup>
      </Hero>
    </ThemeProvider>
  );
}
