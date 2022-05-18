import { configureStore } from "@reduxjs/toolkit";
import AppearanceReducer from "../features/Appearance";
import RefStoreReducer from "../features/RefStore";
import MaintenanceReducer from "../features/Maintenance";
import { maintenanceApi } from "../services/MaintenanceService";
import { emailApi } from "../services/EmailService";
import { guestApi } from "../services/GuestService";

export const store = configureStore({
  reducer: {
    appearance: AppearanceReducer,
    refStore: RefStoreReducer,
    [maintenanceApi.reducerPath]: maintenanceApi.reducer,
    maintenance: MaintenanceReducer,
    [emailApi.reducerPath]: emailApi.reducer,
    [guestApi.reducerPath]: guestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(maintenanceApi.middleware)
      .concat(emailApi.middleware)
      .concat(guestApi.middleware),
});
