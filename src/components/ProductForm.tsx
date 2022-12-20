import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Box, MultiSelect } from "@mantine/core";

// todo: move to a separate file
const KEYWORDS = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
];

interface FormValues {
  name: string;
  summary: string;
  keywords: string[];
  formality: string; // todo add real types
  length: string; // here too
  language: string; // and here
}

const initialValues: FormValues = {
  name: "",
  summary: "",
  keywords: [],
  formality: "",
  length: "short",
  language: "en",
};

const validate = {
  name: (value: FormValues["name"]) =>
    value.length < 3 || value.length > 50
      ? "Name must be at least 3 and at most 50 characters"
      : null,

  summary: (value: FormValues["summary"]) =>
    value.length < 10 || value.length > 100
      ? "Summary must be at least 10 and at most 100 characters"
      : null,

  keywords: (value: FormValues["keywords"]) =>
    value.length < 1 ? "At least 1 item must be selected" : null,

  formality: (value: FormValues["formality"]) =>
    value.length < 1 ? "A formality type must be selected" : null,

  length: (value: FormValues["length"]) =>
    value.length < 1 ? "A length type must be selected" : null,

  language: (value: FormValues["language"]) =>
    value.length < 1 ? "A language type must be selected" : null,
};

export interface ProductFormProps {}

export default function ProductForm({}: ProductFormProps) {
  const [keywords, setKeywords] = useState(KEYWORDS);

  const form = useForm({ initialValues, validate });

  return (
    <Box sx={{ maxWidth: 700 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Product name"
          placeholder="My Fantastic Product"
          withAsterisk
          mb="md"
          {...form.getInputProps("email")}
        />

        <Textarea
          label="Short summary"
          placeholder="A wooden chair with propellers on it so in those hot summers you won't be sweating"
          multiple
          withAsterisk
          mb="md"
          {...form.getInputProps("email")}
        />

        <MultiSelect
          label="Keywords"
          data={keywords}
          placeholder="Select at least 1 keyword or add your own"
          searchable
          creatable
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setKeywords((current) => [...current, item]);
            return item;
          }}
          withAsterisk
          mb="md"
        />

        <Button type="submit" mt="md">
          Generate
        </Button>
      </form>
    </Box>
  );
}
