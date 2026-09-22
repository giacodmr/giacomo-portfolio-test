import React from 'react';
import { Button, Hero, ThemeProvider } from '@primer/react-brand/esm';

export default function PrimerHero() {
  return (
    <ThemeProvider colorMode="light">
      <Hero align="start" className="portfolio-primer-hero">
        <Hero.Eyebrow>Giacomo Di Muro · Business Consultant · Milan</Hero.Eyebrow>
        <Hero.Heading>
          Turning business questions into structured decisions, insights and execution.
        </Hero.Heading>
        <Hero.Description>
          Commercial strategy · Analytics · Transformation · Applied AI
        </Hero.Description>
        <Hero.ButtonGroup>
          <Button as="a" href="#work">Featured work</Button>
          <Button as="a" href="/about" variant="subtle">About</Button>
        </Hero.ButtonGroup>
      </Hero>
    </ThemeProvider>
  );
}
