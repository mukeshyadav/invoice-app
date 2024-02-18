export default function Page() {
  return (
    <>
      <h1>Best Practices</h1>
      <h3>Image/Font </h3>
      <ul>
        <li>
          <a href="/docs/app/building-your-application/optimizing/images">
            Image Optimization Docs
          </a>
        </li>
        <li>
          <a href="/docs/app/building-your-application/optimizing/fonts">
            Font Optimization Docs
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Improving Web Performance with Images (MDN)
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Web Fonts (MDN)
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </a>
        </li>
      </ul>
      <p>
        Learn more about{' '}
        <a href="/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works">
          how navigation works
        </a>
        .
      </p>
      ;
    </>
  );
}
