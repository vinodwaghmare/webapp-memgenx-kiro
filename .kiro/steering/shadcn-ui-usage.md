---
inclusion: fileMatch
fileMatchPattern: "**/components/**/*.{tsx,jsx}"
-------

# shadcn/ui Component Usage Guidelines

## Installation & Setup
Components are installed individually using the CLI:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

## Component Patterns

### Button Component
```tsx
import { Button } from '@/components/ui/button';

// Variants: default, destructive, outline, secondary, ghost, link
<Button variant="default" size="lg">
  Click me
</Button>

// With icon
<Button>
  <PlusIcon className="mr-2 h-4 w-4" />
  Add Memory
</Button>

// Loading state
<Button disabled={isLoading}>
  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  Save
</Button>
```

### Card Component
```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Memory Title</CardTitle>
    <CardDescription>Captured 2 hours ago</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Memory content goes here...</p>
  </CardContent>
  <CardFooter>
    <Button variant="ghost">View Details</Button>
  </CardFooter>
</Card>
```

### Dialog Component
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Memory?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    {/* Dialog content */}
  </DialogContent>
</Dialog>
```

### Form Components
```tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

<div className="space-y-2">
  <Label htmlFor="search">Search Memories</Label>
  <Input
    id="search"
    placeholder="Type to search..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
</div>

<Textarea
  placeholder="Add notes..."
  rows={4}
/>
```

### Toast Notifications
```tsx
import { useToast } from '@/components/ui/use-toast';

function MyComponent() {
  const { toast } = useToast();
  
  const handleSave = async () => {
    try {
      await saveMemory();
      toast({
        title: 'Success',
        description: 'Memory saved successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save memory',
        variant: 'destructive',
      });
    }
  };
}
```

### Select Component
```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

<Select value={tier} onValueChange={setTier}>
  <SelectTrigger>
    <SelectValue placeholder="Select tier" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="free">Free</SelectItem>
    <SelectItem value="pro">Pro</SelectItem>
    <SelectItem value="enterprise">Enterprise</SelectItem>
  </SelectContent>
</Select>
```

### Skeleton Loading
```tsx
import { Skeleton } from '@/components/ui/skeleton';

function MemoryCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-20 w-full" />
      </CardContent>
    </Card>
  );
}
```

## Styling with Tailwind

### Custom Variants
```tsx
// Extend button variants in components/ui/button.tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        spooky: "bg-purple-600 text-orange-400 hover:bg-purple-700",
      },
    },
  }
);

<Button variant="spooky">Spooky Button</Button>
```

### Dark Mode
```tsx
// Use dark: prefix for dark mode styles
<Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
  <CardContent className="text-gray-900 dark:text-gray-100">
    Content
  </CardContent>
</Card>
```

## Accessibility
- All components are keyboard navigable
- Proper ARIA labels included
- Focus management handled automatically
- Screen reader friendly

## Best Practices
- Use `asChild` prop to compose components without wrapper divs
- Leverage Tailwind classes for custom styling
- Keep component imports organized
- Use TypeScript for prop type safety
- Implement loading states with Skeleton components

---

*shadcn/ui provides accessible, customizable components for the Memory Layer UI.*
