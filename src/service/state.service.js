import { useMutation } from "@tanstack/react-query";
import request from "./httpRequest/index";

const stateService = {
  getNewProducts: () => request.get("/new"),
  getInProgressProducts: () => request.get("/inPprogress"),
  getReadyProducts: () => request.get("/ready"),
  getDeliveringProducts: () => request.get("/delivering"),
};

export const useNewApi = () => {
  return useMutation({ mutationFn: () => stateService.getNewProducts() });
};

export const useinProgressApi = () => {
  return useMutation({
    mutationFn: () => stateService.getInProgressProducts(),
  });
};

export const usedeliveringApi = () => {
  return useMutation({
    mutationFn: () => stateService.getDeliveringProducts(),
  });
};

export const useReadyApi = () => {
  return useMutation({ mutationFn: () => stateService.getReadyProducts() });
};
