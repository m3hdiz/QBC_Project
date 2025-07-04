const steps = ["ورود", "آدرس", "خلاصه خرید"];

const Stepper = ({ activeStep = 0 }: { activeStep: number }) => (
  <div className="flex justify-center w-full">
    <ul
      dir="ltr"
      className="steps steps-horizontal lg:steps-horizontal w-3/7 flex justify-center my-8"
    >
      {steps.map((label, idx) => (
        <li
          key={label}
          className={
            "step step-neutral " +
            (idx < activeStep
              ? "step-success"
              : idx === activeStep
              ? "step-success"
              : "")
          }
          data-content={idx < activeStep ? "✓" : idx === activeStep ? "" : ""}
        >
          <span className="text-base flex items-center gap-1">
            {label}
            {idx === activeStep && (
              <span className="loading loading-ring loading-xs mr-2"></span>
            )}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default Stepper;
