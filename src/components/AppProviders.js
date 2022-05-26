import React from 'react';
import {AuthProvider} from "../providers/auth";
import {NavigationProvider} from "../providers/navigation";
import {FormProvider} from "../providers/form";
import {NoteListProvider} from "../providers/note";
import {NoteServiceProvider} from "../providers/noteService";
import {AuthServiceProvider} from "../providers/authService";

function AppProviders({ children }) {
  return (
    <NavigationProvider>
      <AuthProvider>
        <FormProvider>
          <NoteListProvider>
            <AuthServiceProvider>
              <NoteServiceProvider>
                {children}
              </NoteServiceProvider>
            </AuthServiceProvider>
          </NoteListProvider>
        </FormProvider>
      </AuthProvider>
    </NavigationProvider>
  );
}

export default AppProviders;
