import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "@/app/components/composite/kanban/assets/TrashIcon";
import { Column, Id, Task } from "@/app/components/composite/kanban/types";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import PlusIcon from "@/app/components/composite/kanban/assets/PlusIcon";
import TaskCard from "@/app/components/composite/kanban/taskCard";
import { Box, Button, Flex, Input } from "@chakra-ui/react";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <Box
        ref={setNodeRef}
        style={style}
        bg="#161C22"
        opacity="0.4"
        border="2px"
        borderColor="pink.500" // Chakra UI uses a similar color system to Tailwind, but you need to check for exact matches.
        w="350px"
        h="500px"
        maxH="500px"
        rounded="md"
        display="flex"
        flexDirection="column"
      ></Box>
    );
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      bg="#161C22"
      w="350px"
      h="500px"
      maxH="500px"
      rounded="md"
      display="flex"
      flexDirection="column"
    >
      {/* Column title */}
      <Box
        {...attributes}
        {...listeners}
        onClick={() => setEditMode(true)}
        bg="#0D1117"
        fontSize="md"
        h="60px"
        cursor="grab"
        rounded="md"
        roundedBottom="none"
        p="3"
        fontWeight="bold"
        borderColor="#161C22" // Assuming border-columnBackgroundColor refers to this color.
        borderWidth="4px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" gap="0.5rem">
          <Flex
            justify="center"
            align="items"
            bg="#161C22"
            px="2"
            py="1"
            fontSize="sm"
            rounded="full"
          >
            0
          </Flex>
          {!editMode && column.title}
          {editMode && (
            <Input
              bg="black"
              _focus={{ borderColor: "rose.500" }} // Apply focus styles
              borderColor="gray.200" // Default border color (adjust as needed)
              borderWidth="1px" // Assuming a default border is wanted, since Tailwind applies one by default
              rounded="md"
              outline="none"
              px="2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </Box>
        <Button
          onClick={() => deleteColumn(column.id)}
          color="gray.500" // Sets the text (or icon stroke) color
          _hover={{
            color: "white", // Changes text (or icon stroke) color on hover
            bg: "#161C22", // hover:bg-columnBackgroundColor; use your theme's color or directly set it
          }}
          rounded="md"
          px="1"
          py="2"
          background="transparent" // Assuming you want a transparent background to start with
          border="0" // Removing border, if any, unless you want to keep it
        >
          <TrashIcon stroke="currentColor" />
        </Button>
      </Box>

      {/* Column task container */}
      <Flex
        direction="column" // flex-col
        grow={1} // flex-grow
        gap="4" // gap-4
        p="2" // p-2
        overflowX="hidden" // overflow-x-hidden
        overflowY="auto" // overflow-y-auto
      >
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </Flex>
      {/* Column footer */}
      <Button
        onClick={() => createTask(column.id)}
        display="flex"
        gap="2" // Chakra UI supports gap in flex containers
        alignItems="center"
        border="2px"
        borderColor="#161C22" // Assuming border-columnBackgroundColor refers to this color
        rounded="md"
        p="4"
        _hover={{
          bg: "#0D1117", // Assuming bg-mainBackgroundColor refers to this color
          color: "rose.500", // Ensure the 'rose.500' color exists in your theme or adjust accordingly
        }}
        _active={{
          bg: "black",
        }}
        // If border-x-columnBackgroundColor was intended to only apply to the x-axis, adjust accordingly:
      >
        <PlusIcon />
        Add task
      </Button>
    </Box>
  );
}

export default ColumnContainer;
