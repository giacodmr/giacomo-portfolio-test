import React from 'react';
import { Button, Label, Statistic, ThemeProvider } from '@primer/react-brand/esm';

export default function PrimerProjectMeta({
  tags = [],
  stats = [],
  href,
  colorMode = 'light'
}) {
  return (
    <ThemeProvider colorMode={colorMode}>
      <div className="primer-project-meta">
        <div className="primer-labels" aria-label="Capabilities">
          {tags.map((tag) => <Label key={tag} size="medium">{tag}</Label>)}
        </div>
        {stats.length > 0 && (
          <div className="primer-stats" aria-label="Project evidence">
            {stats.map((stat) => (
              <Statistic key={`${stat.value}-${stat.label}`} size="medium" padding="none">
                <Statistic.Heading>{stat.value}</Statistic.Heading>
                <Statistic.Description>{stat.label}</Statistic.Description>
              </Statistic>
            ))}
          </div>
        )}
        <Button as="a" href={href} variant="subtle">View project</Button>
      </div>
    </ThemeProvider>
  );
}
