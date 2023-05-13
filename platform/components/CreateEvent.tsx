"use client";

import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Heading } from "./Heading";

enum STEPS {
  DESCRIPTION = 0,
  TIMELINE = 1,
  SCEDULE = 2,
  TEAMS = 3,
  STATISTICS = 4,
  RESULTS = 5,
}

const CreateEvent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const stepsArr = [
    "Desctiption",
    "Timeline",
    "Scedule",
    "Teams",
    "Statistics",
    "Results",
  ];
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      price: 1,
      title: "",
      description: "",
      imageSrc: "",
    },
  });

  const category = watch("category");

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   if (step !== STEPS.PRICE) {
  //     return onNext();
  //   }
  //   setIsLoading(true);

  //   axios
  //     .post("/api/products", data)
  //     .then(() => {
  //       router.refresh();
  //       reset();
  //       setStep(STEPS.CATEGORY);
  //     })
  //     .catch(() => {})
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Description" />
    </div>
  );
  if (step === STEPS.TIMELINE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Timeline" />
      </div>
    );
  }
  if (step === STEPS.SCEDULE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Shedule" />
      </div>
    );
  }
  if (step === STEPS.TEAMS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Teams" />
      </div>
    );
  }
  if (step === STEPS.STATISTICS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Statictics" />
      </div>
    );
  }
  if (step === STEPS.RESULTS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Results" />
      </div>
    );
  }
  return (
    <div>
      <nav className="w-3/4 flex justify-between">
        {stepsArr.map((st, i) => (
          <button
            onClick={() => setStep(i)}
            key={st}
            className={step === i ? "underline" : undefined}
          >
            {st}
          </button>
        ))}
      </nav>
      <form>{bodyContent}</form>
    </div>
  );
};

export default CreateEvent;
