import { Box } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

interface CardProps {
  id: string;
  index: number;
  content: string;
}

const Card = ({ id, index, content }: CardProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          p={5}
          bg="gray.200"
          marginBottom={4}
          h="15rem"
          minW="15rem"
        >
          {content}
        </Box>
      )}
    </Draggable>
  );
};

export default Card;
