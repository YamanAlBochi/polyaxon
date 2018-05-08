from libs.services import Service


class EventService(Service):

    event_manager = None

    def can_handle(self, event_type):
        return isinstance(event_type, str) and self.event_manager.knows(event_type)

    def get_event(self, event_type, instance, **kwargs):
        return self.event_manager.get(
            event_type,
        ).from_instance(instance, **kwargs)

    def record(self, event_type, instance=None, **kwargs):
        """
        >>> record('event.action', object_instance)
        """
        if not self.can_handle(event_type=event_type):
            return

        event = self.get_event(event_type=event_type, instance=instance, **kwargs)
        self.record_event(event)

    def record_event(self, event):
        """
        >>> record_event(Event())
        """
        pass
