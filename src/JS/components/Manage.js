export default function Manage() {
  return (
    <div className='Manage'>
      <div className='container'>
        <div className='Manage__intro'>
          <h2 className='heading--2'>
            What’s different about Manage?
          </h2>
          <p className='para'>
            Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.
          </p>
        </div>
        <div className='Manage__features'>
          <div className='Manage__tab'>
            <h3 className='heading--3'>
              <span className='Manage__num'>01</span>
              Track company-wide progress
            </h3>
            <p className='para--sm'>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className='Manage__tab'>
            <h3 className='heading--3'>
              <span className='Manage__num'>02</span>
              Advanced built-in reports
            </h3>
            <p className='para--sm'>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className='Manage__tab'>
            <h3 className='heading--3'>
              <span className='Manage__num'>03</span>
              Everything you need in one place
            </h3>
            <p className='para--sm'>
              Stop jumping from one service to another to communicate, store files,
              track tasks and share documents. Manage offers an all-in-one team
              productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}