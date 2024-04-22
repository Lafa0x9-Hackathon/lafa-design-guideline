import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import Button from './../../components/Button';

const ButtonPage = () => {
  return (
    <main className="flex flex-col items-center gap-20 justify-center py-20">
      <div className="flex flex-col items-start w-[510px]">
        <h2 className="mb-3 font-bold text-2xl underline">Buttons</h2>
        <div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="primary">Primary</Button>
            <Button variant="primary-outline">Outline</Button>
            <Button variant="primary-ghost">Ghost</Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="success">Success</Button>
            <Button variant="success-outline">Outline</Button>
            <Button variant="success-ghost">Ghost</Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="danger">Danger</Button>
            <Button variant="danger-outline">Outline</Button>
            <Button variant="danger-ghost">Ghost</Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="neutral">Neutral</Button>
            <Button variant="neutral-outline">Outline</Button>
            <Button variant="neutral-ghost">Ghost</Button>
          </div>

          <div className="flex items-start flex-col gap-4 mt-8">
            <h1 className="font-semibold">Button with icon</h1>
            <Button variant="primary" className="px-4">
              <FaCircleInfo className="text-inherit" />
              Button text
            </Button>

            <Button variant="success" className="px-4">
              Button text
              <FaCircleInfo className="text-inherit" />
            </Button>

            <Button variant="primary-outline" className="px-4">
              Button text
              <FaCircleInfo className="text-inherit" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ButtonPage;
