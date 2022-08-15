import {
  Card,
  CardContent,
  FormControl,
  Grid,
  Stack,
  TextField,
  Autocomplete,
  Box,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userApi from '../api/userApi';
import { PageHeader, CustomDialog, UserVaccine } from '../components';
import addressList from '../assets/dvhcvn.json';
import { LoadingButton } from '@mui/lab';
import QRCode from 'react-qr-code';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogText, setDialogText] = useState('');

  useEffect(async () => {
    const getUser = async () => {
      const res = await userApi.getOne(id);
      console.log(res);
      setUser(res);
    };
    await getUser();
  }, []);

  const onUpdateSuccess = () => {
    console.log('onUpdateSuccess');
    setDialogType('success');
    setDialogText('User updated');
    setDialogOpen(true);
  };

  const onUpdateFalse = (message) => {
    console.log('onUpdateFalse');
    setDialogType('error');
    setDialogText(message || 'User update fail');
    setDialogOpen(true);
  };

  return (
    <>
      <PageHeader title="User detail" />
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Stack spacing={4}>
            {user && (
              <UserInfo
                user={user}
                onUpdateFalse={onUpdateFalse}
                onUpdateSuccess={onUpdateSuccess}
              />
            )}
            {user && <UserVaccine user={user} />}
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={0}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {user && (
                  <QRCode
                    id="qrcode"
                    value={user.user.id}
                    size={235}
                    level="H"
                  />
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <CustomDialog
        open={dialogOpen}
        type={dialogType}
        showIcon
        content={
          <Typography variant="subtitle1" textAlign="center">
            {dialogText}
          </Typography>
        }
        actions={
          <Box width="100%" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={() => setDialogOpen(false)}>
              OK
            </Button>
          </Box>
        }
      />
    </>
  );
};

export default UserDetail;

const UserInfo = ({
  user: { user: userData },
  onUpdateFalse,
  onUpdateSuccess,
}) => {
  const [onUpdate, setOnUpdate] = useState(false);
  const [name, setName] = useState(userData.fullName);
  const [nameErr, setNameErr] = useState(false);
  const [phone, setPhone] = useState(userData.phoneNumber);
  const [phoneErr, setPhoneErr] = useState(false);
  const [address, setAddress] = useState(
    addressList.addresses.find((e) => e.city === userData.address) || undefined
  );
  const [addressErr, setAddressErr] = useState(false);
  const [idCard, setIdCard] = useState(userData.idNumber);
  const [idCardErr, setIdCardErr] = useState(false);

  const updateUser = async () => {
    if (onUpdate) return;

    const err = [!phone, !name, !address, !idCard];

    setIdCardErr(!idCard);
    setPhoneErr(!phone);
    setNameErr(!name);
    setAddressErr(!address);

    if (!err.every((e) => !e)) return;

    setOnUpdate(true);

    const params = {
      phoneNumber: phone,
      fullName: name,
      idNumber: idCard,
      address: address.name,
    };

    try {
      const res = await userApi.update(userData.id, params);
      console.log(res);
      setOnUpdate(false);
      onUpdateSuccess();
    } catch (err) {
      setOnUpdate(false);
      console.log(err.response);
      onUpdateFalse(err.response.data);
    }
  };

  console.log(address);

  return (
    <Card elevation={0}>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Id card"
                variant="outlined"
                value={idCard}
                onChange={(e) => setIdCard(e.target.value)}
                error={idCardErr}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Fullname"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameErr}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Phone"
                variant="outlined"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={phoneErr}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <Autocomplete
                options={addressList.addresses}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => {
                  return (
                    <Box {...props} component="li">
                      {option.city}
                    </Box>
                  );
                }}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      label="Address"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                      error={addressErr}
                    />
                  );
                }}
                value={address.city ?? ''}
                onChange={(event, newValue) => newValue && setAddress(newValue)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <LoadingButton
          variant="contained"
          disableElevation
          onClick={updateUser}
          loading={onUpdate}
        >
          Update
        </LoadingButton>
      </CardActions>
    </Card>
  );
};
