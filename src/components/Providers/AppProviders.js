import React from 'react';
import {NavigationProvider} from "./navigation";
import {FormProvider} from "./form";
import {NoteListProvider} from "./note";
import {NoteServiceProvider} from "./noteService";

function AppProviders({ children }) {
  return (
    <NavigationProvider>
      <FormProvider>
        <NoteListProvider>
          <NoteServiceProvider>
            {children}
          </NoteServiceProvider>
        </NoteListProvider>
      </FormProvider>
    </NavigationProvider>
  );
}

export default AppProviders;
