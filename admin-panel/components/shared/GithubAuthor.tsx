import React from 'react';
import GitHubButton from 'react-github-btn';

export const GithubAuthor: React.FunctionComponent = () => (
  <footer className="absolute bottom-0 w-[300px] m-4 w-fit flex items-center gap-3 rounded-[10px] justify-center">
    <GitHubButton
      href="https://github.com/zourdyzou"
      data-color-scheme="no-preference: light; light: light_high_contrast; dark: dark;"
      data-size="large"
      aria-label="Follow @zourdyzou on GitHub"
    >
      Follow @zourdyzou
    </GitHubButton>
    <GitHubButton
      href="https://github.com/zourdyzou/vaccine-validator-app"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-size="large"
      data-show-count="true"
      aria-label="Star zourdyzou/vaccine-validator-app on GitHub"
    >
      Star
    </GitHubButton>
  </footer>
);
