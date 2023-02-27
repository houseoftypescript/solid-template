import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import FormControl from '@suid/material/FormControl';
import TextField from '@suid/material/TextField';
import { Component, createSignal } from 'solid-js';
import LayoutTemplate from '../../../templates/LayoutTemplate';
import Paper from '@suid/material/Paper';

const GeneralForm = () => {
  const [firstName, setFirstName] = createSignal<string>('');
  const [lastName, setLastName] = createSignal<string>('');
  const [emailAddress, setEmailAddress] = createSignal<string>('');
  const [phoneNumber, setPhoneNumber] = createSignal<string>('');
  const [country, setCountry] = createSignal<string>('');
  const [state, setState] = createSignal<string>('');
  const [city, setCity] = createSignal<string>('');
  const [postalCode, setPostalCode] = createSignal<string>('');

  const updateProfile = (event: any) => {
    event.preventDefault();
    return;
  };

  return (
    <Paper class="border">
      <form onSubmit={updateProfile} class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                value={firstName()}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={lastName()}
                onChange={(event) => setLastName(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                type="email"
                id="emailAddress"
                name="emailAddress"
                label="Email Address"
                placeholder="Email Address"
                value={emailAddress()}
                onChange={(event) => setEmailAddress(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                placeholder="Phone Number"
                value={phoneNumber()}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="country"
                name="country"
                label="Country"
                placeholder="Country"
                value={country()}
                onChange={(event) => setCountry(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="state"
                name="state"
                label="State/Province"
                placeholder="State/Province"
                value={state()}
                onChange={(event) => setState(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="city"
                name="city"
                label="City"
                placeholder="City"
                value={city()}
                onChange={(event) => setCity(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="postalCode"
                name="postalCode"
                label="Postal Code"
                placeholder="Postal Code"
                value={postalCode()}
                onChange={(event) => setPostalCode(event.target.value)}
              />
            </FormControl>
          </div>
          <div class="col-span-1 md:col-span-2">
            <Button fullWidth type="submit" variant="contained">
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </Paper>
  );
};

const PasswordForm = () => {
  const [oldPassword, setOldPassword] = createSignal<string>('');
  const [newPassword, setNewPassword] = createSignal<string>('');
  const [confirmPassword, setConfirmPassword] = createSignal<string>('');

  const changePassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Paper class="border">
      <form onSubmit={changePassword} class="p-8">
        <div class="flex flex-col gap-8">
          <FormControl fullWidth>
            <TextField
              id="oldPassword"
              name="oldPassword"
              label="Old Password"
              placeholder="Old Password"
              value={oldPassword()}
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="newPassword"
              name="newPassword"
              label="New Password"
              placeholder="New Password"
              value={newPassword()}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              value={confirmPassword()}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </FormControl>
          <Button fullWidth type="submit" variant="contained">
            Save Changes
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export const ProfilePage: Component = () => {
  return (
    <LayoutTemplate>
      <div class="py-8">
        <Container>
          <div class="flex flex-col gap-8">
            <GeneralForm />
            <PasswordForm />
          </div>
        </Container>
      </div>
    </LayoutTemplate>
  );
};

export default ProfilePage;
