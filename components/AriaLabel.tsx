import React from "react";

interface AriaLabelProps {
  persons: Array<{
    id: number;
    name: string;
    handleClick(e: React.MouseEvent<HTMLButtonElement>): void;
  }>;
}

function AriaLabel(props: AriaLabelProps) {
  const { persons } = props;

  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <div>{person.name}</div>
            <div>
              <button
                aria-label={`Connect ${person.name}`}
                onClick={person.handleClick}
              >
                Connect
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AriaLabel;
