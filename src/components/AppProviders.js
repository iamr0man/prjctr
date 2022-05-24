import React from 'react';
import {AuthProvider} from "../providers/auth";
import {NavigationProvider} from "../providers/navigation";
import {FormProvider} from "../providers/form";
import {NoteListProvider} from "../providers/note";
import {NoteServiceProvider} from "../providers/noteService";

function AppProviders({ children }) {
  return (
    <NavigationProvider>
      <AuthProvider>
        <FormProvider>
          <NoteListProvider>
            <NoteServiceProvider>
              {children}
            </NoteServiceProvider>
          </NoteListProvider>
        </FormProvider>
      </AuthProvider>
    </NavigationProvider>
  );
}

export default AppProviders;
