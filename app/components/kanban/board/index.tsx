'use client';

// default
import { useState } from 'react';
// internal
import Column from '../column';
// external
import { SimpleGrid } from '@chakra-ui/react';
import { DragDropContext } from 'react-beautiful-dnd';

interface Item {
  id: string;
  content: string;
}

interface ColumnData {
  id: string;
  items: Item[];
}

const initialColumns: ColumnData[] = [
  {
    id: 'column-1',
    items: [
      { id: 'item-1', content: 'Box 1' },
      { id: 'item-2', content: 'Box 2' },
      { id: 'item-3', content: 'Box 3' },
    ],
  },
  {
    id: 'column-2',
    items: [
      { id: 'item-4', content: 'Box 4' },
      { id: 'item-5', content: 'Box 5' },
      { id: 'item-6', content: 'Box 6' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'item-7', content: 'Box 7' },
      { id: 'item-8', content: 'Box 8' },
      { id: 'item-9', content: 'Box 9' },
    ],
  },
];

const Board: React.FC = () => {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumns);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn = columns.find(column => column.id === source.droppableId)!;
    const destColumn = columns.find(column => column.id === destination.droppableId)!;

    const sourceItems = Array.from(sourceColumn.items);
    const [removed] = sourceItems.splice(source.index, 1);

    if (sourceColumn === destColumn) {
      sourceItems.splice(destination.index, 0, removed);
    } else {
      const destItems = Array.from(destColumn.items);
      destItems.splice(destination.index, 0, removed);
      destColumn.items = destItems;
    }

    sourceColumn.items = sourceItems;
    setColumns([...columns]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <SimpleGrid columns={[1, null, 2, null, 3]} spacing="20px" p={0} overflow="auto">
        {columns.map(column => (
          <Column key={column.id} column={column} />
        ))}
      </SimpleGrid>
    </DragDropContext>
  );
};

export default Board;
