export type Segment = {
    [index: string]: string | null | undefined;
    id: string;
    content: string;
    type: "indigo" | "navy" | "turquise";
    contentHtml: string;
  };
  
  export type Segments = Array<Segment>;
  