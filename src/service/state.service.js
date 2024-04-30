import { useMutation } from "@tanstack/react-query";
import request from "./httpRequest/index";

const stateService = {
  getNewProducts: () => request.get("/new"),
  getInProgressProducts: () => request.get("/inPprogress"),
  getReadyProducts: () => request.get("/ready"),
  getDeliveringProducts: () => request.get("/delivering"),
  getTashkentTime: () =>
    request.get(
      "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Tashkent"
    ),
};
export const UseTimeApi = () => {
  return useMutation({
    mutationFn: (data = stateService.getTashkentTime(data)),
  });
};

export const useNewApi = () => {
  return useMutation({
    mutationFn: (data) => stateService.getNewProducts(data),
  });
};
export const useInProgressApi = () => {
  return useMutation({
    mutationFn: (data) => stateService.getInProgressProducts(data),
  });
};
export const useDeliveringApi = () => {
  return useMutation({
    mutationFn: (data) => stateService.getReadyProducts(data),
  });
};
export const useReadyApi = () => {
  return useMutation({
    mutationFn: (data) => stateService.getDeliveringProducts(data),
  });
};
