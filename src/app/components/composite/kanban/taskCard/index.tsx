import { useState } from "react";
import TrashIcon from "@/app/components/composite/kanban/assets/TrashIcon";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Button, Text, Textarea } from "@chakra-ui/react";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <Box
        ref={setNodeRef}
        style={style}
        opacity="0.3"
        bg="#0D1117" // Assuming bg-mainBackgroundColor refers to this color
        p="2.5" // Chakra UI allows for decimal points in spacing values
        h="100px"
        minH="100px"
        alignItems="center"
        display="flex"
        flexDirection="row" // Assuming text-left implies a row direction; adjust as necessary
        rounded="xl"
        border="2px"
        borderColor="rose.500" // Ensure the rose.500 color exists in your theme or adjust accordingly
        cursor="grab"
        position="relative"
      />
    );
  }

  if (editMode) {
    return (
      <Box
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        bg="#0D1117" // Assuming bg-mainBackgroundColor refers to this color
        p="2.5" // Chakra UI supports decimal values in its theme scale
        h="100px"
        minH="100px"
        alignItems="center"
        display="flex"
        flexDirection="row" // Assumed based on text-left, adjust if necessary
        rounded="xl"
        cursor="grab"
        position="relative"
        _hover={{
          ring: "2px",
          ringInset: "inset",
          ringColor: "rose.500", // Make sure this color is defined in your theme
        }}
      >
        <Textarea
          h="90%"
          w="full"
          resize="none"
          border="none"
          rounded="md" // Adjust as needed to match your design
          bg="transparent"
          color="white" // Sets text color
          _focus={{ outline: "none" }}
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </Box>
    );
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      bg="#0D1117" // Replace with your theme's mainBackgroundColor value
      p="2.5"
      h="100px"
      minH="100px"
      alignItems="center"
      display="flex"
      flexDirection="row" // Assumed from text-left
      rounded="xl"
      cursor="grab"
      position="relative"
      _hover={{
        boxShadow: "0 0 0 2px var(--chakra-colors-rose-500)", // Approximation of the ring effect
      }}
      className="task" // If you need to apply external CSS or use this for JS targeting
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <Text
        my="auto" // Applies vertical margin auto
        h="90%" // Sets height to 90% of its container
        w="full" // Takes full width of its container
        overflowY="auto" // Allows vertical scrolling
        overflowX="hidden" // Hides horizontal overflow
        whiteSpace="pre-wrap" // Preserves whitespace and wraps text
      >
        {task.content}
      </Text>

      {mouseIsOver && (
        <Button
          onClick={() => deleteTask(task.id)}
          color="white" // Assuming the stroke applies to text color or SVG fill color
          position="absolute"
          right="4" // Tailwind's right-4 equivalent
          top="50%" // Tailwind's top-1/2 equivalent
          transform="translateY(-50%)" // Tailwind's -translate-y-1/2 equivalent
          bg="#161C22" // Assuming bg-columnBackgroundColor refers to this color, replace with actual color variable from theme
          p="2" // Tailwind's p-2 equivalent
          rounded="md" // Tailwind's rounded equivalent
          opacity="0.6" // Tailwind's opacity-60 equivalent
          _hover={{ opacity: "1" }} // Tailwind's hover:opacity-100 equivalent
        >
          <TrashIcon stroke="currentColor" /> {/* Adjust SVG prop as needed */}
        </Button>
      )}
    </Box>
  );
}

export default TaskCard;
