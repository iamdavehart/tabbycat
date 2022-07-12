// type: interface
// name: CreateLensRequest
// namespace: tableau.nlp.lens.publicrest.v1
export interface CreateLensRequest {
  name?: string;
  datasource_id?: string;
  project_id?: string;
  description?: string;
  is_feedback_enabled?: boolean;
  fields?: FieldDetail[];
}


// type: interface
// name: CreateLensResponse
// namespace: tableau.nlp.lens.publicrest.v1
export interface CreateLensResponse {
  lens?: {
    id?: string;
    name?: string;
    site_id?: string;
    datasource_id?: string;
    project_id?: string;
    owner_id?: string;
    description?: string;
    repository_url?: string;
    is_feedback_enabled?: boolean;
    fields?: LensField[];
    recommended_visualization_groups?: {
      name?: string;
      description?: string;
      recommended_visualizations?: {
        expression?: string;
        interpretation?: string;
        colloquial_alias?: string;
      }[];
    }[];
  };
}


// type: interface
// name: FieldDetail
// namespace: tableau.nlp.lens.publicrest.v1
export interface FieldDetail {
  graph_id?: string;
  custom_label?: string;
  custom_description?: string;
  field_synonyms?: string[];
  value_synonyms?: {
    value?: string;
    synonyms?: string[];
  }[];
}


// type: interface
// name: GetLensResponse
// namespace: tableau.nlp.lens.publicrest.v1
export interface GetLensResponse {
  lens?: {
    id?: string;
    name?: string;
    site_id?: string;
    datasource_id?: string;
    project_id?: string;
    owner_id?: string;
    description?: string;
    repository_url?: string;
    is_feedback_enabled?: boolean;
    fields?: LensField[];
    recommended_visualization_groups?: {
      name?: string;
      description?: string;
      recommended_visualizations?: {
        expression?: string;
        interpretation?: string;
        colloquial_alias?: string;
      }[];
    }[];
  };
}


// type: interface
// name: ImportLensRequest
// namespace: tableau.nlp.lens.publicrest.v1
export interface ImportLensRequest {
  lens?: {
    id?: string;
    name?: string;
    site_id?: string;
    datasource_id?: string;
    project_id?: string;
    owner_id?: string;
    description?: string;
    repository_url?: string;
    is_feedback_enabled?: boolean;
    fields?: LensField[];
    recommended_visualization_groups?: {
      name?: string;
      description?: string;
      recommended_visualizations?: {
        expression?: string;
        interpretation?: string;
        colloquial_alias?: string;
      }[];
    }[];
  };
  lens_transformations?: {
    name?: string;
    description?: string;
    datasource_id?: string;
    project_id?: string;
    owner_id?: string;
  };
}


// type: interface
// name: ImportLensResponse
// namespace: tableau.nlp.lens.publicrest.v1
export interface ImportLensResponse {
  lens?: Lens;
}


// type: interface
// name: Lens
// namespace: tableau.nlp.lens.publicrest.v1
export interface Lens {
  id?: string;
  name?: string;
  site_id?: string;
  datasource_id?: string;
  project_id?: string;
  owner_id?: string;
  description?: string;
  repository_url?: string;
  is_feedback_enabled?: boolean;
  fields?: LensField[];
  recommended_visualization_groups?: {
    name?: string;
    description?: string;
    recommended_visualizations?: {
      expression?: string;
      interpretation?: string;
      colloquial_alias?: string;
    }[];
  }[];
}


// type: interface
// name: LensField
// namespace: tableau.nlp.lens.publicrest.v1
export interface LensField {
  graph_id?: string;
  custom_label?: string;
  custom_description?: string;
  field_synonyms?: string[];
  inherited_field_synonyms?: string[];
  value_synonyms?: ValueSynonym[];
  inherited_value_synonyms?: {
    value?: string;
    synonyms?: string[];
  }[];
}


// type: interface
// name: LensTransformation
// namespace: tableau.nlp.lens.publicrest.v1
export interface LensTransformation {
  name?: string;
  description?: string;
  datasource_id?: string;
  project_id?: string;
  owner_id?: string;
}


// type: interface
// name: ListLensesResponse
// namespace: tableau.nlp.lens.publicrest.v1
export interface ListLensesResponse {
  lenses?: {
    id?: string;
    name?: string;
    site_id?: string;
    datasource_id?: string;
    project_id?: string;
    owner_id?: string;
    description?: string;
    repository_url?: string;
  }[];
}


// type: interface
// name: ListLensItem
// namespace: tableau.nlp.lens.publicrest.v1
export interface ListLensItem {
  id?: string;
  name?: string;
  site_id?: string;
  datasource_id?: string;
  project_id?: string;
  owner_id?: string;
  description?: string;
  repository_url?: string;
}


// type: interface
// name: RecommendedVisualization
// namespace: tableau.nlp.lens.publicrest.v1
export interface RecommendedVisualization {
  expression?: string;
  interpretation?: string;
  colloquial_alias?: string;
}


// type: interface
// name: RecommendedVisualizationGroup
// namespace: tableau.nlp.lens.publicrest.v1
export interface RecommendedVisualizationGroup {
  name?: string;
  description?: string;
  recommended_visualizations?: {
    expression?: string;
    interpretation?: string;
    colloquial_alias?: string;
  }[];
}


// type: interface
// name: ValueSynonym
// namespace: tableau.nlp.lens.publicrest.v1
export interface ValueSynonym {
  value?: string;
  synonyms?: string[];
}

