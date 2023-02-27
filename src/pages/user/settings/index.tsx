import Container from '@suid/material/Container';
import { Component } from 'solid-js';
import LayoutTemplate from '../../../templates/LayoutTemplate';
import FormControlLabel from '@suid/material/FormControlLabel';
import Switch from '@suid/material/Switch';
import Paper from '@suid/material/Paper';

export const SettingsPage: Component = () => {
  return (
    <LayoutTemplate>
      <div class="py-8">
        <Container>
          <Paper class="border p-8">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-2">
                <h2 class="text-gray-700 uppercase">Activity</h2>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email me when someone comments on my article"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email me when someone answers on my article"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Email me when someone follows me"
                />
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="text-gray-700 uppercase">Application</h2>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="News and announcements"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Weekly product updates"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Weekly blog digest"
                />
              </div>
            </div>
          </Paper>
        </Container>
      </div>
    </LayoutTemplate>
  );
};

export default SettingsPage;
