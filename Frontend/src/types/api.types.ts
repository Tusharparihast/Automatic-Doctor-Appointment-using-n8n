// src/types/api.types.ts

export interface ApiResponse<T> {
  success: boolean;

  data: T;

  message?: string;
}

export interface ApiError {
  message: string;

  status?: number;
}

export interface PaginationMeta {
  page: number;

  pageSize: number;

  total: number;
}