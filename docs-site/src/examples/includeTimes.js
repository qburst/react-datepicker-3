() => {
  const [selectedDateTime, setSelectedDateTime] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );
  return (
    <DatePicker
      selected={selectedDateTime}
      onChange={(date) => setSelectedDateTime(date)}
      showTimeSelect
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};
