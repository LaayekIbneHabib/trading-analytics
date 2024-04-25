// internal
import Card from "../card";
// external
import { Box } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";

interface ColumnProps {
  column: {
    id: string;
    items: Array<{
      id: string;
      content: string;
    }>;
  };
}

const Column = ({ column }: ColumnProps) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.droppableProps}>
          {column.items.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              index={index}
              content={item.content}
            />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default Column;
