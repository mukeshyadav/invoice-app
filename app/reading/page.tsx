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
      <p>
        To recap, you've done a few things to optimize data fetching in your
        application, you've:
      </p>
      <ol>
        <li>
          Created a database in the same region as your application code to
          reduce latency between your server and database.
        </li>
        <li>
          Fetched data on the server with React Server Components. This allows
          you to keep expensive data fetches and logic on the server, reduces
          the client-side JavaScript bundle, and prevents your database secrets
          from being exposed to the client.
        </li>
        <li>
          Used SQL to only fetch the data you needed, reducing the amount of
          data transferred for each request and the amount of JavaScript needed
          to transform the data in-memory.
        </li>
        <li>
          Parallelize data fetching with JavaScript - where it made sense to do
          so.
        </li>
        <li>
          Implemented Streaming to prevent slow data requests from blocking your
          whole page, and to allow the user to start interacting with the UI
          without waiting for everything to load.
        </li>
        <li>
          Move data fetching down to the components that need it, thus isolating
          which parts of your routes should be dynamic in preparation for
          Partial Prerendering.
        </li>
        <p>You can also read more about <a href="https://nextjs.org/blog/security-nextjs-server-components-actions" rel="noopener noreferrer" target="_blank">security with Server Actions<span class="inline-flex"><svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color: currentcolor; width: 14px; height: 14px;"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></a> for additional learning.</p>
      </ol>
      ;
    </>
  );
}
