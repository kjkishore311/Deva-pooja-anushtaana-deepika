export interface PanchangaEdition {
  id: string;
  label: string;
  year: string;
  pdfUrl: string;
}

export interface PanchangaCalendar {
  year: string;
  editions: PanchangaEdition[];
  source: string;
  retrievedAt: string;
}
