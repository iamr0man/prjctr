import React from 'react';
import {NavigationProvider} from "../providers/navigation";
import {FormProvider} from "../providers/form";
import {NoteListProvider} from "../providers/note";
import {NoteServiceProvider} from "../providers/noteService";

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
